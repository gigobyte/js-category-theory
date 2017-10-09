//========================================
// Introduction:
// Arrow = Morphism = Function
// f :: A -> B
// g :: B - C
// f . g = g(f())
//========================================


//========================================
// Implementation:
// f :: (a -> b)
const f = x => x+1
// g :: (b - c)
const g = x => x.toString()
// compose :: (a -> b) -> (b -> c) -> (a -> c)
const compose = f => g => x => g(f(x))
//========================================

//========================================
// Proof:
const assert = require('assert')
const fg = compose(f)(g)
assert(fg(3) === '4')
//========================================


