import { supabase  } from '../config/supabase.config.js';

export class PosterModel {
    static async getAllPosters() {
        try {
            // Kald til database
            let { data, error } = await supabase
                .from('posters')
                .select('*')
            if (error) {
                throw new Error(error.message)
            } else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke hente posterliste, ${error}`)
        }
    }

    static async getPosterById(id) {
        try {
            // Kald til database
            let { data, error } = await supabase
                .from('posters')
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
            console.error(`Fejl: kan ikke hente poster, ${error}`)
        }
    }

    static async createPoster(formdata) {
        try {
            let { data, error } = await supabase.from('posters')
                .insert([
                    {
                        name: formdata.name,
                        slug: formdata.slug,
                        description: formdata.description,
                        img: formdata.img,
                        width: formdata.width,
                        height: formdata.height,
                        price: formdata.price,
                        stock: formdata.stock
                    }
                ])
                .select('*') // Ensure the inserted record is returned
            if (error) {
                throw new Error(error.message);
            } else {
                return data[0]; // Return the first (and only) record
            }
        }
        catch (error) {
            console.error(`Fejl: kan ikke oprette poster, ${error}`);
        }
    }

    static async updatePoster(formdata) {
        try {
            let { data, error } = await supabase
                .from('posters')
                .update([
                    {
                        name: formdata.name,
                        slug: formdata.slug,
                        description: formdata.description,
                        img: formdata.img,
                        width: formdata.width,
                        height: formdata.height,
                        price: formdata.price,
                        stock: formdata.stock
                    }
                ])
                .eq('id', formdata.id)

            if (error) {
                throw new Error(error.message);
            } else {
                return data[0]; // Return the first (and only) record
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere poster, ${error}`);

        }

    }

    static async deletePoster(formdata) {
        try {
            let { data, error } = await supabase
                .from('posters')
                .delete()
                .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message)
            } else {
                return 'OK'
            }
        }


        catch (error) {
            console.error(`Fejl: kan ikke slette poster, ${error}`);
        }
    }

}