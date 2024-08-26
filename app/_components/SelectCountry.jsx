import { getCountries } from '@/app/_lib/data-service'

// This is a server component because it's async and fetch data from the server

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries()
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? ''
  console.log('Flag: ', countries)

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  )
}

export default SelectCountry
