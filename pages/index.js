


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
               
                {data.map(data => {
                    return (
                    <ul key={data.id}>
                            <li key={data.country}>{data.country}</li>
                            <li key={data.confirmed}>{data.confirmed}</li>
                            <li key={data.suspected}>{data.suspected}</li>
                            <li key={data.total}>{data.total}</li>
                            <li key={data.deaths}>{data.deaths}</li>
</ul>

                    );
                })}
                      
            </main>
            <footer>
                <center>Data from <a href="https://rapidapi.com/gAlexander10/api/monkeypox-global-statistics/">
                Monkeypox Global Statistics API</a></center>
            </footer>
        </div>
        </>
    )
}
    
