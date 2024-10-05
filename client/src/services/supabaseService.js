// services/supabaseService.js
import { supabase } from './supabaseClient';

// Fetch trips for a specific user
export const getUserTrips = async (userId) => {
    const { data, error } = await supabase
        .from('trips')
        .select('*')
        .eq('user_id', userId);

    return { data, error };
};

// Fetch checklist items for a specific trip
export const getChecklistItems = async (tripId) => {
    const { data, error } = await supabase
        .from('checklists')
        .select('*')
        .eq('trip_id', tripId);

    return { data, error };
};
