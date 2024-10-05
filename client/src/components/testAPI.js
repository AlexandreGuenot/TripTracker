import React, { useEffect, useState } from 'react';
import { getUserTrips, getChecklistItems } from '../services/supabaseService'; // Adjust the import path as needed

const TestApi = () => {
    const [trips, setTrips] = useState([]);
    const [checklists, setChecklists] = useState([]);
    const userId = '6368720e-6efb-42f9-9324-90a31fe53e39'; // Replace with your actual user ID
    const tripId = '315b4f4e-4095-4389-aaa0-ab0e104257c6'; // Replace with an actual trip ID

    useEffect(() => {
        const fetchTrips = async () => {
            const { data, error } = await getUserTrips(userId);
            if (error) {
                console.error('Error fetching trips:', error);
            } else {
                setTrips(data);
            }
        };

        const fetchChecklists = async () => {
            const { data, error } = await getChecklistItems(tripId);
            if (error) {
                console.error('Error fetching checklists:', error);
            } else {
                setChecklists(data);
            }
        };

        fetchTrips();
        fetchChecklists();
    }, [userId, tripId]);

    return (
        <div>
            <h2>User Trips</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>{trip.destination} (From: {trip.start_date} To: {trip.end_date})</li>
                ))}
            </ul>

            <h2>Checklist Items</h2>
            <ul>
                {checklists.map(item => (
                    <li key={item.id}>{item.item} {item.is_checked ? '(Checked)' : ''}</li>
                ))}
            </ul>
        </div>
    );
};

export default TestApi;
