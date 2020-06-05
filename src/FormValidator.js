import validator from 'validator';

class FormValidator {

    constructor(validacao) {
        this.validacoes = validacao;
    }

    valida(state) {
        let validacao = this.valido();

        this.validacoes.forEach((regra) => {
            if (!validacao[regra.campo].isInvalid) {
                const valorDoCampo = state[regra.campo];
                const args = regra.args || [];
                const metodoValidacao = typeof regra.metodo === 'string' ? validator[regra.metodo] : regra.metodo;

                if (metodoValidacao(valorDoCampo, ...args) !== regra.validaQuando) {
                    validacao[regra.campo] = {
                        isInvalid: true,
                        message: regra.mensagem
                    }
                    validacao.isValid = false;
                }
            }
        });
        return validacao;
    }

    valido() {
        const validacao = {}

        this.validacoes.map((regra) => (
            validacao[regra.campo] = { isInvalid: false, message: '' }
        ));

        return { isValid: true, ...validacao };
    }
}

export default FormValidator;