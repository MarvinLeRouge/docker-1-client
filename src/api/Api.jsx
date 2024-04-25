export async function apiTime() {
    console.log("apiTime")
    console.log("process.env.DOCKER_API_URL", process.env.DOCKER_API_URL)
    let url = process.env.DOCKER_API_URL + '/server/time'
    try {
        const reqInfos = new Request(url,  {method: "get"})
        const req = await fetch(reqInfos)
        let result = await req.json()
        return result
    }
    catch(error) {
        console.error("apiTime error", error)
        throw new Error("apiTime")
    }
}

export async function apiHello(name) {
    console.log("apiHello", name)
    console.log("process.env.DOCKER_API_URL", process.env.DOCKER_API_URL)
    let url = process.env.DOCKER_API_URL + '/hello/' + name
    try {
        const reqInfos = new Request(url,  {method: "get"})
        const req = await fetch(reqInfos)
        let result = await req.json()
        return result
    }
    catch(error) {
        console.error("apiHello error", error)
        throw new Error("apiHello")
    }
}

