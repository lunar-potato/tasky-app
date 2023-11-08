import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const initSupabase = () => {
  const supabaseUrl = "https://vumfiwtseuqdsodbaghp.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

  return createClient(supabaseUrl, supabaseKey);
};

// Export the initialized Supabase client
export const supabaseClient = initSupabase();

// Function to delete a task by ID
export const deleteTask = async (taskId) => {
  try {
    const { data, error } = await supabaseClient
      .from("tasks")
      .delete()
      .eq("id", taskId);

    if (!error) {
      // Task deleted successfully, you can update your UI or perform any necessary actions.
      console.log("Task deleted successfully.");
      return { success: true };
    } else {
      console.error("Error deleting task:", error);
      return { success: false, error };
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    return { success: false, error };
  }
};

// Other Supabase-related functions can be defined here
