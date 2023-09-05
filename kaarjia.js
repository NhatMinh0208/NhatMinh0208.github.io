import {
    adsr,
    letter_name_to_frequency,
    letter_name_to_midi_note,
    init_record, 
    record_for, 
    play, 
    piano, 
    sawtooth_sound, 
    consecutively, 
    simultaneously,
    silence_sound,
    square_sound,
    sine_sound} from 'sound';

const pair = (x,y) => f => f(x,y);

const head = f => f((x,y) => x);
const tail = f => f((x,y) => y);

function append_p(p1, p2) {
    const new_sound = t => {
        const l1 = tail(p1);
        const l2 = tail(p2);
    };
}

const bpm = 155;

const mts = m => m / bpm * 60 - 0.001;
const conv_func = letter_name_to_frequency;


const c1 = conv_func('C1');
const d1 = conv_func('D1');
const e1 = conv_func('E1');
const f1 = conv_func('F1');
const g1 = conv_func('G1');
const a1 = conv_func('A1');
const b1 = conv_func('B1');

const c2 = conv_func('C2');
const d2 = conv_func('D2');
const e2 = conv_func('E2');
const f2 = conv_func('F2');
const g2 = conv_func('G2');
const a2 = conv_func('A2');
const b2 = conv_func('B2');

const c3 = conv_func('C3');
const d3 = conv_func('D3');
const e3 = conv_func('E3');
const f3 = conv_func('F3');
const g3 = conv_func('G3');
const a3 = conv_func('A3');
const b3 = conv_func('B3');

const c4 = conv_func('C4');
const d4 = conv_func('D4');
const e4 = conv_func('E4');
const f4 = conv_func('F4');
const g4 = conv_func('G4');
const a4 = conv_func('A4');
const b4 = conv_func('B4');


function repeat(sound, cnt) {
    return (cnt===1)
    ? sound
    : consecutively(list(
        sound,
        repeat(sound, cnt-1)
        ));
}

play(
    consecutively(list(
    silence_sound(mts(1)),
    simultaneously(list(
        consecutively(list(
            silence_sound(mts(1/2)),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(b4, mts(1/2))),
            silence_sound(mts(1/2)),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1/2))),
            silence_sound(mts(1/2)),
            repeat(consecutively(list(
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(3))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(d4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(b4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(b4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(b4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1)))
            )), 2),
            
            repeat(consecutively(list(
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(3))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(g4, mts(1/2))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(d4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(b4, mts(1))),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1))),
            silence_sound(mts(8)),
            adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a4, mts(1)))
            )), 2)
        )),
        
        consecutively(list(
            silence_sound(mts(4)),
            repeat(consecutively(list(
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(e2, mts(1/2))),8),
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(d2, mts(1/2))),8),
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(c2, mts(1/2))),12),
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(d2, mts(1/2))),4),
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(e2, mts(1/2))),8),
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(d2, mts(1/2))),8),
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(a1, mts(1/2))),8),
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(c2, mts(1/2))),4),
            repeat(adsr(0.1, 0.8, 1, 0.1)(sawtooth_sound(d2, mts(1/2))),4)
            )), 2)
        )),
        adsr(0,0,0.9,0)(
        consecutively(list(
            silence_sound(mts(4)),
            repeat(consecutively(list(
            adsr(0.1, 0.8, 1, 0.1)(square_sound(e3, mts(4))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(d3, mts(4))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(c3, mts(4))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(c3, mts(2))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(d4, mts(2))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(e4, mts(4))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(d4, mts(4))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(a3, mts(4))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(c4, mts(2))),
            adsr(0.1, 0.8, 1, 0.1)(square_sound(d4, mts(2)))
            )), 2)
        )))
    ))
    ))
);



