// services/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Retrieve the Supabase URL and Key from the .env file
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY;
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseAnonKey);

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
