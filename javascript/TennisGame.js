class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.pontuacao = 0;
    }
}

class JogoDeTenis {
    constructor(nomeJogador1, nomeJogador2) {
        this.jogador1 = new Jogador(nomeJogador1);
        this.jogador2 = new Jogador(nomeJogador2);
    }

    marcarPonto(jogador) {
        if (jogador === this.jogador1.nome) {
            this.jogador1.pontuacao++;
        } else {
            this.jogador2.pontuacao++;
        }
    }

    empate() {
        return this.jogador1.pontuacao === this.jogador2.pontuacao;
    }

    vantagemOuVitoria() {
        return this.jogador1.pontuacao >= 4 || this.jogador2.pontuacao >= 4;
    }

    pontuacaoEmpate(pontuacoes) {
        if (this.jogador1.pontuacao < 3) {
            return `${pontuacoes[this.jogador1.pontuacao]}-All`;
        } else {
            return "Deuce";
        }
    }

    pontuacaoVantagemOuVitoria() {
        const diferencaPontuacao = this.jogador1.pontuacao - this.jogador2.pontuacao;
        if (Math.abs(diferencaPontuacao) === 1) {
            const lider = diferencaPontuacao > 0 ? this.jogador1.nome : this.jogador2.nome;
            return `Vantagem ${lider}`;
        } else {
            const vencedor = diferencaPontuacao > 0 ? this.jogador1.nome : this.jogador2.nome;
            return `Vitória para ${vencedor}`;
        }
    }

    pontuacaoNormal(pontuacoes) {
        return `${pontuacoes[this.jogador1.pontuacao]}-${pontuacoes[this.jogador2.pontuacao]}`;
    }

    obterPontuacao() {
        const pontuacoes = ["Love", "Fifteen", "Thirty", "Deuce"];

        if (this.empate()) {
            return this.pontuacaoEmpate(pontuacoes);
        } else if (this.vantagemOuVitoria()) {
            return this.pontuacaoVantagemOuVitoria();
        } else {
            return this.pontuacaoNormal(pontuacoes);
        }
    }
}