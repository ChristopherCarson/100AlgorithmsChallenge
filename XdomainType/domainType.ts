function domainType(domains: string[]): string[] {
    const returnArray = []

    const hash = { 
        '.org': 'organization',
        '.com': 'commercial',
        '.net': 'network',
        '.info': 'information'
    }

    for (let domain of domains){
        let current = ''
        for (let i = domain.length -1; i > -1; i--){
            current = domain[i] + current
            if (domain[i] === '.') break
        }
        returnArray.push(hash[current])
    }

    return returnArray
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));