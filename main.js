function subnetMaskToBinary(subnetMask) {
    let octets = subnetMask.split('.');

    if (octets.length !== 4) {
        throw new Error("Invalid subnet mask format. Must be in dotted decimal notation (e.g., 255.255.255.0).");
    }

    let binaryOctets = octets.map(octet => {
        let binary = parseInt(octet, 10).toString(2); 
        return binary.padStart(8, '0'); 
    });

    return binaryOctets.join('.');
}


function calculateIpAdresses(cidr) {
    const addresses = 2 ** (32 - cidr) - 2;

    if (cidr < 0 || cidr > 32) {
        throw new Error("CIDR must be between 0 and 32");
    }

    let mask = 0xFFFFFFFF << (32 - cidr);

    let octet1 = (mask >> 24) & 0xFF;
    let octet2 = (mask >> 16) & 0xFF;
    let octet3 = (mask >> 8) & 0xFF;
    let octet4 = mask & 0xFF;


    subnetmask.innerHTML = `Subnet Mask: ${cidr}`;
    subaddresses.innerHTML = `Number of available Addresses: ${addresses} <br> (${addresses + 2} including Network and Broadcast)`;
    subdotdecimal.innerHTML = `Dot-Decimal-Notation: ${octet1}.${octet2}.${octet3}.${octet4}`;
    subnetmaskbinary.innerHTML = `Binary: ${subnetMaskToBinary(`${octet1}.${octet2}.${octet3}.${octet4}`)}`;
}

