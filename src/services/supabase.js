import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eusedmobfddutgjbmjci.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1c2VkbW9iZmRkdXRnamJtamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1NDc5NjAsImV4cCI6MjA0MzEyMzk2MH0.BtNIjkKjuHGySxLp8NH5kUCNVOfYGhF6gTcfhaML_hw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
