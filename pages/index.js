function MonkeyPox({ data }) {
    return <p>{JSON.stringify(data)}</p>
}

export const  getServerSideProps  = async () => {
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

//route
export default function Home({ data }) {
    return (
        <div>
            <main>
                <center><h1>Monkeypox Tracker</h1></center>
                 <table>
                        <tr><td><h4>Country</h4></td>
                        <td><h4>Confirmed</h4></td>
                        <td><h4>Suspected</h4></td>
                            <td><h4>Total</h4></td>
                        <td><h4>Deaths</h4></td>
                        </tr>
                {data.map(data => (
                   <tr>
                            <td>{data.country}</td>
                            <td>{data.confirmed}</td>
                            <td>{data.suspected}</td>
                            <td>{data.total}</td>
                            <td>{data.deaths}</td>
                        </tr>
                  
                ))}
                      </table>
            </main>
            <footer>
                <center>Data from <a href="https://rapidapi.com/gAlexander10/api/monkeypox-global-statistics/">
                Monkeypox Global Statistics API</a></center>
            </footer>
        </div>
        
    )
}
    

