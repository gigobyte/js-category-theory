const assert = require('assert')

//===========================================//
//                   Intro                   //
//===========================================//
//      Composing effectful functions        //
//          return a >>= k = k a             //
//            m >>= return =  m              //
// m >>= (\x -> k x >>= h) = (m >>= k) >>= h //
//===========================================//
//             Implementation:               //
//===========================================//
// type Writer a = (a, String)
// (>=>) :: (a -> Writer b) -> (b -> Writer c) -> (a -> Writer c)
// (>=>) = kleisliCompose
const kleisliCompose = f => g => x => {
    const [ y, s1 ] = f(x)
    const [ z, s2 ] = g(y)
    return [z, s1 + s2]
}

// returnM :: a -> Writer a 
const returnM = x => [x, '']
// upCase :: String -> Writer String 
const upCase = s => [[s].map(x => x.toUpperCase()).join(), 'upCase ']
// toWords :: String -> Writer [String] 
const toWords = s => [s.split(' '), 'toWords ']
// process :: String -> Writer [String]
const process = kleisliCompose(upCase)(toWords)
//===========================================//
//                  Proof:                   //
//===========================================//
assert.deepEqual(
    process('a b c'),
    [['A', 'B', 'C'], 'upCase toWords ']
)