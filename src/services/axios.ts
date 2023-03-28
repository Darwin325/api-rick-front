import axios from 'axios'
import { config, urlApi, urlBase } from '../config'

const get = async (path: string, token: boolean, data: unknown = null) => {
   return await axios.get( `${ urlApi }/${ path }`, { headers: config( token ), params: data } )
}

const post = async (path: string, token: boolean,  data: unknown) => {
   return await axios.post( `${ urlApi }/${ path }`, data, { headers: config( token ) } )
}

const put = async (path: string, token: boolean, data: unknown) => {
   return await axios.put( `${ urlApi }/${ path }`, data, { headers: config( token ) } )
}

const remove = async (path: string, token: boolean ) => {
   return await axios.delete( `${ urlApi }/${ path }`, { headers: config( token ) } )
}

export {  get, post, put, remove }