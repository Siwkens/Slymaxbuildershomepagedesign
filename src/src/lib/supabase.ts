import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

// Types for contact form
export interface ContactRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  project_type: string;
  budget?: string;
  timeline?: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'contacted' | 'closed';
}

// Types for price estimates
export interface PriceEstimate {
  id?: string;
  area: number;
  room_type: string;
  renovation_level: string;
  estimated_price: number;
  estimated_time: string;
  created_at?: string;
}

/**
 * Submit contact form to Supabase
 */
export async function submitContactForm(data: ContactRequest) {
  try {
    const { data: result, error } = await supabase
      .from('contact_requests')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          project_type: data.project_type,
          budget: data.budget || null,
          timeline: data.timeline || null,
          message: data.message,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;

    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
}

/**
 * Save price estimate to Supabase
 */
export async function savePriceEstimate(data: PriceEstimate) {
  try {
    const { data: result, error } = await supabase
      .from('price_estimates')
      .insert([
        {
          area: data.area,
          room_type: data.room_type,
          renovation_level: data.renovation_level,
          estimated_price: data.estimated_price,
          estimated_time: data.estimated_time,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;

    return { success: true, data: result };
  } catch (error) {
    console.error('Error saving price estimate:', error);
    return { success: false, error };
  }
}

/**
 * Check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey && supabaseUrl.includes('supabase'));
}

/**
 * Get contact requests (admin function)
 */
export async function getContactRequests(status?: string) {
  try {
    let query = supabase
      .from('contact_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error('Error fetching contact requests:', error);
    return { success: false, error };
  }
}

/**
 * Update contact request status (admin function)
 */
export async function updateContactRequestStatus(
  id: string,
  status: 'new' | 'contacted' | 'closed'
) {
  try {
    const { data, error } = await supabase
      .from('contact_requests')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error('Error updating contact request:', error);
    return { success: false, error };
  }
}
