import { supabase  } from '../config/supabase.config.js';

export class UserProfileModel {
    static async getAllUserProfiles() {
        try {
            let { data, error } = await supabase
                .from('user_profile')
                .select('*')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente brugerprofiler, ${error}`)
        }
    }

    static async getUserProfileById(id) {
        try {
            let { data, error } = await supabase
                .from('user_profile')
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
            console.error(`Fejl: kan ikke hente brugerprofil, ${error}`)
        }
    }

    static async createUserProfile(formdata) {
        try {
            let { data, error } = await supabase.from('user_profile')
                .insert([
                    {
                        user_id: formdata.user_id,
                        firstname: formdata.firstname,
                        lastname: formdata.lastname,
                        birthdate: formdata.birthdate,
                        gender: formdata.gender,
                        position: formdata.position
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
            console.error(`Fejl: kan ikke oprette brugerprofil, ${error}`);
        }
    }

    static async updateUserProfile(formdata) {
        try {
            let { data, error } = await supabase
                .from('user_profile')
                .update([
                    {
                        user_id: formdata.user_id,
                        firstname: formdata.firstname,
                        lastname: formdata.lastname,
                        birthdate: formdata.birthdate,
                        gender: formdata.gender,
                        position: formdata.position
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0];
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere brugerprofil, ${error}`);
        }
    }

    static async deleteUserProfile(formdata) {
        try {
            let { data, error } = await supabase
                .from('user_profile')
                .delete()
                .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message)
            } else {
                return 'OK'
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke slette brugerprofil, ${error}`);
        }
    }
}