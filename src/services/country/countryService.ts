import { CountryProps } from '@/@types/countryProps'
import { ICountryListFilters } from '@/hooks/useCountryListFilters'
import { api } from '@/services/api'

type TResponse = {
  data: CountryProps[];
}

const getAllCountry = async function (params: ICountryListFilters) {
  try {
    let response = {} as TResponse

    if (params.name) {
      response = await api.get(`/translation/${params.name}`)
    }

    if (params.language) {
      response = await api.get(`/lang/${params.language}`)
    }

    if (params.region) {
      response = await api.get(`/region/${params.region}`)
    }

    if (!params || params == null || (params.name == null && params.language == null && params.region == null)) {
      response = await api.get('/all')
    }

    return response.data
  } catch (error){
    console.error('Erro ao buscar país:', error)
    throw new Error('País não encontrado')
  }
}

const getLanguages = async function () {
  try {
    const response = await api.get('all?fields=languages')

    return response.data
  } catch (error){
    console.error('Erro ao buscar país:', error)
    throw new Error('País não encontrado')
  }
}

const getCountry = async function (countryName: string) {
  try {
    const response = await api.get(`/translation/${countryName}`)

    return response.data
  } catch (error){
    console.error('Erro ao buscar país:', error)
    throw new Error('País não encontrado')
  }
}

export { getAllCountry, getLanguages, getCountry }
