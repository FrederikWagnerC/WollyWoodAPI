import { supabase  } from '../config/supabase.config.js';

export class GenreModel {
    static async getAllGenres() {
        try {
            let { data, error } = await supabase
                .from('genres')
                .select('*')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente genre liste, ${error}`)
        }
    }

    static async getGenreById(id) {
        try {
            let { data, error } = await supabase
                .from('genres')
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
            console.error(`Fejl: kan ikke hente genre, ${error}`)
        }
    }

    static async createGenre(formdata) {
        try {
            let { data, error } = await supabase.from('genres')
                .insert([
                    {
                        title: formdata.title,
                        slug: formdata.slug
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
            console.error(`Fejl: kan ikke oprette genre, ${error}`);
        }
    }

    static async updateGenre(formdata) {
        try {
            let { data, error } = await supabase
                .from('genres')
                .update([
                    {
                        title: formdata.title,
                        slug: formdata.slug
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0];
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere genre, ${error}`);
        }
    }

    static async deleteGenre(formdata) {
        try {
            let { data, error } = await supabase
                .from('genres')
                .delete()
                .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message)
            } else {
                return 'OK'
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke slette genre, ${error}`);
        }
    }
}