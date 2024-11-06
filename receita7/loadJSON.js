const carregarTable = (ct, labels, indices) => {
    const tb = document.getElementById("table")
    const itensHtml = ct.map((item) => `<tr>${indices.map((i) => "<td>" + item[i] + "</td>").join("\n")}</tr>`)
    tb.innerHTML = `<tr>${labels.map((lbl) => "<th>" + lbl + "</th>").join("\n")}</tr>${itensHtml.join("\n")}`
}

async function carregar(labels, indices, linkapi) {
    try {
        let res = await fetch(linkapi)
        json = await res.json()
        console.log(json)

        carregarTable(json, labels, indices)
    } catch (err) {
        document.getElementById("table").innerHTML = "ERRO!"
    }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregar(
        // ["Nome", "E-mail", "Telefone"],
        // ["first_name", "email", "phone_number"],
        // "https://random-data-api.com/api/v2/users?size=5"
        ["Tipo", "Fator RH", "Grupo"],
        ["type", "rh_factor", "group"],
        "https://random-data-api.com/api/v2/blood_types?size=5"
    ))