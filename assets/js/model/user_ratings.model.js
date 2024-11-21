import { supabase  } from '../config/supabase.config.js';

export class UserRatingModel {
    static async getAllUserRatings() {
        try {
            let { data, error } = await supabase
                .from('user_ratings')
                .select('*')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente brugervurderinger, ${error}`)
        }
    }

    static async getUserRatingById(id) {
        try {
            let { data, error } = await supabase
                .from('user_ratings')
                .select('*')
                .eq('id', id)
                .single()
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente brugervurdering, ${error}`)
        }
    }

    static async createUserRating(formdata) {
        try {
            let { data, error } = await supabase.from('user_ratings')
                .insert([
                    {
                        user_id: formdata.user_id,
                        poster_id: formdata.poster_id,
                        num_stars: formdata.num_stars
                    }
                ])
                .select('*')
            if (error) {
                throw new Error(error.message);
            } else {
                return data[0];
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke oprette brugervurdering, ${error}`);
        }
    }

    static async updateUserRating(formdata) {
        try {
            let { data, error } = await supabase
                .from('user_ratings')
                .update([
                    {
                        user_id: formdata.user_id,
                        poster_id: formdata.poster_id,
                        num_stars: formdata.num_stars
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0];
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere brugervurdering, ${error}`);
        }
    }

    static async deleteUserRating(formdata) {
        try {
            let { data, error } = await supabase
                .from('user_ratings')
                .delete()
                .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message)
            } else {
                return 'OK'
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke slette brugervurdering, ${error}`);
        }
    }
}