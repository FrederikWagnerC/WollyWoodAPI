import { supabase  } from '../config/supabase.config.js';

export class CartlineModel {
    static async getAllCartlines() {
        try {
            let { data, error } = await supabase
                .from('cartlines')
                .select('*')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente cartline liste, ${error}`)
        }
    }

    static async getCartlineById(id) {
        try {
            let { data, error } = await supabase
                .from('cartlines')
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
            console.error(`Fejl: kan ikke hente cartline, ${error}`)
        }
    }

    static async createCartline(formdata) {
        try {
            let { data, error } = await supabase.from('cartlines')
                .insert([
                    {
                        user_id: formdata.user_id,
                        poster_id: formdata.poster_id,
                        quantity: formdata.quantity,
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
            console.error(`Fejl: kan ikke oprette cartline, ${error}`);
        }
    }

    static async updateCartline(formdata) {
        try {
            let { data, error } = await supabase
                .from('cartlines')
                .update([
                    {
                        user_id: formdata.user_id,
                        poster_id: formdata.poster_id,
                        quantity: formdata.quantity,
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0];
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere cartline, ${error}`);
        }
    }

    static async deleteCartline(formdata) {
        try {
            let { data, error } = await supabase
                .from('cartlines')
                .delete()
                .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message)
            } else {
                return 'OK'
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke slette cartline, ${error}`);
        }
    }
}