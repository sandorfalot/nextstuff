function MonkeyPox({ data }) {
    return <p>{JSON.stringify(data)}</p>
}

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
export default function Home({ data }) {
    return (
        <>        <div>
            <main>
               
                {data.map(data => (
                    <p key={data.id}>{data.country}<p?
                           <p key={data.id>{data.confirmed}</p>
                           <p key={data.id}>{data.suspected}</p>
                            <p key={data.id>{data.total}</p>
                            <p key=data.id>{data.deaths}</p>
                        
                  
                ))}
                      
            </main>
            <footer>
                <center>Data from <a href="https://rapidapi.com/gAlexander10/api/monkeypox-global-statistics/">
                Monkeypox Global Statistics API</a></center>
            </footer>
        </div>
        </>
    )
}
    
