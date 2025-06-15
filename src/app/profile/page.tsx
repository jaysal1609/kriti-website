'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from '@/context/AuthProvider';

export default function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({ full_name: '', avatar_url: '' });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') console.error(error);
      if (data) setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Updating...');
    const { error } = await supabase.from('profiles').upsert({
      id: user?.id,
      email: user?.email,
      full_name: profile.full_name,
      avatar_url: profile.avatar_url,
    });

    setStatus(error ? 'Failed to update' : 'Profile updated');
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];

      if (!file) {
        console.log("❌ No file selected");
        return;
      }

      //if (!file || !user) return;

       // ✅ Step 1: Log file info
      console.log("📂 File selected:", file.name);
      console.log("📏 File size:", file.size, "bytes");
      console.log("📎 File type:", file.type);

      if (!file.type.startsWith('image/')) {
        alert('Only image uploads allowed.');
        return;
      }

      if (file.size > 1024 * 1024) {
        alert('File too large (max 1MB).');
        return;
      }

      // ✅ Step 2: Get Supabase user
        const {
            data: { user },
            error: userError
        } = await supabase.auth.getUser();

        if (userError || !user) {
            console.error("❌ No user found or error:", userError);
            alert("User not logged in");
            return;
     }

      console.log("🙋 Authenticated user ID:", user.id);

      const ext = file.name.split('.').pop(); // e.g., "jpg"
      const filePath = `${user.id}/avatar.${ext}`;

      console.log("🛣️ Uploading to path:", filePath);

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      setProfile({ ...profile, avatar_url: data.publicUrl });
      console.log("✅ Upload successful:", data);
      setStatus('Photo uploaded!');
    } catch (err: any) {
      console.error(err.message);
      console.error("❌ Upload failed:", err.message);
      alert('Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-10 flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Your Profile</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                value={user?.email || ''}
                readOnly
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">Full Name</label>
              <input
                type="text"
                value={profile.full_name}
                onChange={(e) =>
                  setProfile({ ...profile, full_name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">Upload Avatar</label>
              {/*<input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="w-full border border-gray-300 p-2 rounded"
              />*/}
              <p className="text-gray-500 italic mt-2">Profile photo upload is currently disabled.</p>
            </div>

            {profile.avatar_url && (
              <div className="text-center">
                <img
                  src={profile.avatar_url}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full mx-auto border"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Update Profile'}
            </button>

            {status && <p className="text-center text-gray-600 mt-2">{status}</p>}
          </form>
        )}
      </div>
    </main>
  );
}
