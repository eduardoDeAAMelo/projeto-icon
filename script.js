function mostrarImagemMario() {
    
    
    const mario = document.getElementById('mario');
    const luigi = document.getElementById('luigi');
    const peach = document.getElementById('peach');
    const toad = document.getElementById('toad');
    const yoshi = document.getElementById('yoshi');

    const botaoCodemario = document.getElementById('botaoDoCodemario');
    const botaoCodeluigi = document.getElementById('botaoDoCodeluigi');
    const botaoCodepeach = document.getElementById('botaoDaCodepeach');
    const botaoCodetoad = document.getElementById('botaoDoCodetoad');
    const botaoCodeyoshi = document.getElementById('botaoDoCodeyoshi');

    if (luigi.classList.contains('selecionado') || peach.classList.contains('selecionado') || toad.classList.contains('selecionado') || yoshi.classList.contains('selecionado')){
        luigi.classList.remove('selecionado');
        peach.classList.remove('selecionado');
        toad.classList.remove('selecionado');
        yoshi.classList.remove('selecionado');        

        mario.classList.add('selecionado');

        botaoCodeluigi.classList.remove('selecionado');
        botaoCodepeach.classList.remove('selecionado');
        botaoCodetoad.classList.remove('selecionado');
        botaoCodeyoshi.classList.remove('selecionado');

        botaoCodemario.classList.add('selecionado');
    }
}

function mostrarImagemLuigi() {
    
    
    const mario = document.getElementById('mario');
    const luigi = document.getElementById('luigi');
    const peach = document.getElementById('peach');
    const toad = document.getElementById('toad');
    const yoshi = document.getElementById('yoshi');

    const botaoCodemario = document.getElementById('botaoDoCodemario');
    const botaoCodeluigi = document.getElementById('botaoDoCodeluigi');
    const botaoCodepeach = document.getElementById('botaoDaCodepeach');
    const botaoCodetoad = document.getElementById('botaoDoCodetoad');
    const botaoCodeyoshi = document.getElementById('botaoDoCodeyoshi');

    if (mario.classList.contains('selecionado') || peach.classList.contains('selecionado') || toad.classList.contains('selecionado') || yoshi.classList.contains('selecionado')){
        mario.classList.remove('selecionado');
        peach.classList.remove('selecionado');
        toad.classList.remove('selecionado');
        yoshi.classList.remove('selecionado');  

        luigi.classList.add('selecionado');

        botaoCodemario.classList.remove('selecionado');
        botaoCodepeach.classList.remove('selecionado');
        botaoCodetoad.classList.remove('selecionado');
        botaoCodeyoshi.classList.remove('selecionado');

        botaoCodeluigi.classList.add('selecionado');

    }
}

function mostrarImagemPeach() {
    
    
    const mario = document.getElementById('mario');
    const luigi = document.getElementById('luigi');
    const peach = document.getElementById('peach');
    const toad = document.getElementById('toad');
    const yoshi = document.getElementById('yoshi');

    const botaoCodemario = document.getElementById('botaoDoCodemario');
    const botaoCodeluigi = document.getElementById('botaoDoCodeluigi');
    const botaoCodepeach = document.getElementById('botaoDaCodepeach');
    const botaoCodetoad = document.getElementById('botaoDoCodetoad');
    const botaoCodeyoshi = document.getElementById('botaoDoCodeyoshi');

    if (mario.classList.contains('selecionado') || luigi.classList.contains('selecionado') || toad.classList.contains('selecionado') || yoshi.classList.contains('selecionado')){
        mario.classList.remove('selecionado');
        luigi.classList.remove('selecionado');
        toad.classList.remove('selecionado');
        yoshi.classList.remove('selecionado');  

        peach.classList.add('selecionado');

        botaoCodemario.classList.remove('selecionado');
        botaoCodeluigi.classList.remove('selecionado');
        botaoCodetoad.classList.remove('selecionado');
        botaoCodeyoshi.classList.remove('selecionado');

        botaoCodepeach.classList.add('selecionado');

    }
}

function mostrarImagemToad() {
    
    
    const mario = document.getElementById('mario');
    const luigi = document.getElementById('luigi');
    const peach = document.getElementById('peach');
    const toad = document.getElementById('toad');
    const yoshi = document.getElementById('yoshi');

    const botaoCodemario = document.getElementById('botaoDoCodemario');
    const botaoCodeluigi = document.getElementById('botaoDoCodeluigi');
    const botaoCodepeach = document.getElementById('botaoDaCodepeach');
    const botaoCodetoad = document.getElementById('botaoDoCodetoad');
    const botaoCodeyoshi = document.getElementById('botaoDoCodeyoshi');

    if (mario.classList.contains('selecionado') || luigi.classList.contains('selecionado') || peach.classList.contains('selecionado') || yoshi.classList.contains('selecionado')){
        mario.classList.remove('selecionado');
        luigi.classList.remove('selecionado');
        peach.classList.remove('selecionado');
        yoshi.classList.remove('selecionado');  

        toad.classList.add('selecionado');

        botaoCodemario.classList.remove('selecionado');
        botaoCodeluigi.classList.remove('selecionado');
        botaoCodepeach.classList.remove('selecionado');
        botaoCodeyoshi.classList.remove('selecionado');

        botaoCodetoad.classList.add('selecionado');

    }
}

function mostrarImagemYoshi() {
    
    
    const mario = document.getElementById('mario');
    const luigi = document.getElementById('luigi');
    const peach = document.getElementById('peach');
    const toad = document.getElementById('toad');
    const yoshi = document.getElementById('yoshi');

    const botaoCodemario = document.getElementById('botaoDoCodemario');
    const botaoCodeluigi = document.getElementById('botaoDoCodeluigi');
    const botaoCodepeach = document.getElementById('botaoDaCodepeach');
    const botaoCodetoad = document.getElementById('botaoDoCodetoad');
    const botaoCodeyoshi = document.getElementById('botaoDoCodeyoshi');

    if (mario.classList.contains('selecionado') || luigi.classList.contains('selecionado') || peach.classList.contains('selecionado') || toad.classList.contains('selecionado')){
        mario.classList.remove('selecionado');
        luigi.classList.remove('selecionado');
        peach.classList.remove('selecionado');
        toad.classList.remove('selecionado');  

        yoshi.classList.add('selecionado');

        botaoCodemario.classList.remove('selecionado');
        botaoCodeluigi.classList.remove('selecionado');
        botaoCodepeach.classList.remove('selecionado');
        botaoCodetoad.classList.remove('selecionado');

        botaoCodeyoshi.classList.add('selecionado');

    }
}