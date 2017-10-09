// Arrow = Morphism = Function

// f :: A -> B
// g :: B - C
const f = x => x+1
const g = x => x.toString()


// f . g = g(f())
// compose :: (a -> b) -> (b -> c) -> (a -> c)
const compose = f => g => x => g(f(x))

// compose(f)(g)(1) => "2"