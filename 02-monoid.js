//========================================//
//                 Intro                  //
//========================================//
//        class Monoid m where            //
//            mempty  :: m                //
//            mappend :: m -> m -> m      //
//========================================//
//             Implementation:            //
//========================================//
// String Monoid
const Smempty = () => ''
const Smappend = x => y => x + y
// List Monoid
const Lmempty = () => []
const Lmappend = x => y => x.concat(y)