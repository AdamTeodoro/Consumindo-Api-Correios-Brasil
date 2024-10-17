import { rastrearEncomendas } from "correios-brasil/dist";

async function rastrearEncomenda() {
    await rastrearEncomendas(['QI583411291BR'])
        .then((response) => {
            if (response) {
                const object = response[0];
                const keys = Object.keys(object);
                object[keys.length - 1].status
            }
        });
}

rastrearEncomenda()
