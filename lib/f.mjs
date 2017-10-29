import fCurry from './f.curry.mjs'
import fFlip from './f.flip.mjs'
import fCompose from './f.compose.mjs'
import fPipe from './f.pipe.mjs'
import fMerge from './f.merge.mjs'

export const curry = fCurry
export const flip = fFlip
export const compose = fCompose
export const pipe = fPipe
export const merge = fMerge

export default {
  curry,
  flip,
  compose,
  pipe,
  merge
}
