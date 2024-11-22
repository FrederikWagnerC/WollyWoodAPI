import { supabase } from '../config/supabase.config.js';

export class GenrePosterRelModel {
    static async getAllGenresPosterRels() {
        try {
            let { data, error } = await supabase
                .from('genre_poster_rel')
                .select('*')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente genre_poster_rel liste, ${error}`)
        }
    }

    static async getGenrePosterRelById(id) {
        try {
            let { data, error } = await supabase
                .from('genre_poster_rel')
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
            console.error(`Fejl: kan ikke hente genre_poster_rel, ${error}`)
        }
    }

    static async createGenrePosterRel(formdata) {
        try {
            let { data, error } = await supabase.from('genre_poster_rel')
                .insert([
                    {
                        genre_id: formdata.genre_id,
                        poster_id: formdata.poster_id
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
            console.error(`Fejl: kan ikke oprette genre_poster_rel, ${error}`);
        }
    }

    static async updateGenrePosterRel(formdata) {
        try {
            let { data, error } = await supabase
                .from('genre_poster_rel')
                .update([
                    {
                        genre_id: formdata.genre_id,
                        poster_id: formdata.poster_id
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0];
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere genre_poster_rel, ${error}`);
        }
    }

    static async deleteGenrePosterRel(formdata) {
        try {
            let { data, error } = await supabase
                .from('genre_poster_rel')
                .delete()
                .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message)
            } else {
                return 'OK'
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke slette genre_poster_rel, ${error}`);
        }
    }
}