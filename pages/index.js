export async function getServerSideProps() {
    const headers = new Headers();
    headers.append('X-RapidAPI-Key', '6fa680398fmshadf4be5c3caa2bep145905jsn9d73ba413785',
        'X-RapidAPI-Host', 'monkeypox-poxvirus-statistics.p.rapidapi.com');

    const res = await fetch(`https://monkeypox-poxvirus-statistics.p.rapidapi.com/`, {
        method: 'GET',
        headers,
        mode: 'cors',
        cache: 'default',
    }
    )

    const data = await res.json()
    return { props: { data } }
}
function HomePage({ data }) {
  return (
    <table>
      <tr><td>Country</td>
        <td>Confirmed</td>
        <td>Suspected</td>
        <td>Deaths</td>
        <td>Total</td>
      </tr>
      {
        data.map((data) =>
          <tr><td key={data.id}>{data.country}</td>
          <td key={data.id}>{data.confirmed}</td>
            <td key={data.id}>{data.suspected}</td>
            <td key={data.id}>{data.deaths}</td>
            <td key={data.id}>{data.total}</td>
          </tr>
        )
      }
    </table>
  )
}
export default HomePage;
