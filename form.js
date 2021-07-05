
const st = require('@mountbuild/script-tree')

const m = {
  u: {
    'grave': '\u0300',
    'acute': '\u0301',
    'dacute': '\u030B',
    'dgrave': '\u030F',
    'up': '\u0302',
    'down': '\u030C',
    'dot': '\u0307',
    'ddot': '\u0308',
    'ring': '\u030A',
    'tilde': '\u0303',
  },
  d: {
    'grave': '\u0316',
    'acute': '\u0317',
    'ring': '\u0325',
    'dot': '\u0323',
    'ddot': '\u0324',
    'down': '\u032C',
    'tilde': '\u0330'
  }
}

const ASCII_TO_UNICODE = [
  { i: 'I~++', o: `ı${m.d.tilde}${m.d.dot}${m.u.dacute}` },
  { i: 'I~+', o: `ı${m.d.tilde}${m.d.dot}${m.u.acute}` },
  { i: 'I~--', o: `ı${m.d.tilde}${m.d.dot}${m.u.dgrave}` },
  { i: 'I~-', o: `ı${m.d.tilde}${m.d.dot}${m.u.grave}` },
  { i: 'I~', o: `ı${m.d.tilde}${m.d.dot}` },
  { i: '(I~++)', o: `ı${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(I~+)', o: `ı${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(I~--)', o: `ı${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(I~-)', o: `ı${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(I~)', o: `ı${m.d.tilde}${m.d.dot}${m.u.dot}` },

  { i: 'I++', o: `ı${m.d.dot}${m.u.dacute}` },
  { i: 'I+', o: `ı${m.d.dot}${m.u.acute}` },
  { i: 'I--', o: `ı${m.d.dot}${m.u.dgrave}` },
  { i: 'I-', o: `ı${m.d.dot}${m.u.grave}` },
  { i: 'I', o: `ı${m.d.dot}` },
  { i: '(I++)', o: `ı${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(I+)', o: `ı${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(I--)', o: `ı${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(I-)', o: `ı${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(I)', o: `ı${m.d.dot}${m.u.dot}` },

  { i: 'i#~++', o: `ı${m.d.tilde}${m.d.ddot}${m.u.dacute}` },
  { i: 'i#~+', o: `ı${m.d.tilde}${m.d.ddot}${m.u.acute}` },
  { i: 'i#~--', o: `ı${m.d.tilde}${m.d.ddot}${m.u.dgrave}` },
  { i: 'i#~-', o: `ı${m.d.tilde}${m.d.ddot}${m.u.grave}` },
  { i: 'i#~', o: `ı${m.d.tilde}${m.d.ddot}` },
  { i: '(i#~++)', o: `ı${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(i#~+)', o: `ı${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(i#~--)', o: `ı${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(i#~-)', o: `ı${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(i#~)', o: `ı${m.d.tilde}${m.d.ddot}${m.u.dot}` },

  { i: 'i#++', o: `ı${m.d.ddot}${m.u.dacute}` },
  { i: 'i#+', o: `ı${m.d.ddot}${m.u.acute}` },
  { i: 'i#--', o: `ı${m.d.ddot}${m.u.dgrave}` },
  { i: 'i#-', o: `ı${m.d.ddot}${m.u.grave}` },
  { i: 'i#', o: `ı${m.d.ddot}` },
  { i: '(i#++)', o: `ı${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(i#+)', o: `ı${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(i#--)', o: `ı${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(i#-)', o: `ı${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(i#)', o: `ı${m.d.ddot}${m.u.dot}` },

  { i: 'i~++', o: `ı${m.d.tilde}${m.u.dacute}` },
  { i: 'i~+', o: `ı${m.d.tilde}${m.u.acute}` },
  { i: 'i~--', o: `ı${m.d.tilde}${m.u.dgrave}` },
  { i: 'i~-', o: `ı${m.d.tilde}${m.u.grave}` },
  { i: 'i~', o: `ı${m.d.tilde}` },
  { i: '(i~++)', o: `ı${m.d.tilde}${m.u.dot}${m.u.dacute}` },
  { i: '(i~+)', o: `ı${m.d.tilde}${m.u.dot}${m.u.acute}` },
  { i: '(i~--)', o: `ı${m.d.tilde}${m.u.dot}${m.u.dgrave}` },
  { i: '(i~-)', o: `ı${m.d.tilde}${m.u.dot}${m.u.grave}` },
  { i: '(i~)', o: `ı${m.d.tilde}${m.u.dot}` },

  { i: 'i++', o: `ı${m.u.dacute}` },
  { i: 'i+', o: `ı${m.u.acute}` },
  { i: 'i--', o: `ı${m.u.dgrave}` },
  { i: 'i-', o: `ı${m.u.grave}` },
  { i: 'i', o: `ı` },
  { i: '(i++)', o: `ı${m.u.dot}${m.u.dacute}` },
  { i: '(i+)', o: `ı${m.u.dot}${m.u.acute}` },
  { i: '(i--)', o: `ı${m.u.dot}${m.u.dgrave}` },
  { i: '(i-)', o: `ı${m.u.dot}${m.u.grave}` },
  { i: '(i)', o: `ı${m.u.dot}` },

  { i: 'E~++', o: `e${m.d.tilde}${m.d.dot}${m.u.dacute}` },
  { i: 'E~+', o: `e${m.d.tilde}${m.d.dot}${m.u.acute}` },
  { i: 'E~--', o: `e${m.d.tilde}${m.d.dot}${m.u.dgrave}` },
  { i: 'E~-', o: `e${m.d.tilde}${m.d.dot}${m.u.grave}` },
  { i: 'E~', o: `e${m.d.tilde}${m.d.dot}` },
  { i: '(E~++)', o: `e${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(E~+)', o: `e${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(E~--)', o: `e${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(E~-)', o: `e${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(E~)', o: `e${m.d.tilde}${m.d.dot}${m.u.dot}` },

  { i: 'E++', o: `e${m.d.dot}${m.u.dacute}` },
  { i: 'E+', o: `e${m.d.dot}${m.u.acute}` },
  { i: 'E--', o: `e${m.d.dot}${m.u.dgrave}` },
  { i: 'E-', o: `e${m.d.dot}${m.u.grave}` },
  { i: 'E', o: `e${m.d.dot}` },
  { i: '(E++)', o: `e${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(E+)', o: `e${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(E--)', o: `e${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(E-)', o: `e${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(E)', o: `e${m.d.dot}${m.u.dot}` },

  { i: 'e#~++', o: `e${m.d.tilde}${m.d.ddot}${m.u.dacute}` },
  { i: 'e#~+', o: `e${m.d.tilde}${m.d.ddot}${m.u.acute}` },
  { i: 'e#~--', o: `e${m.d.tilde}${m.d.ddot}${m.u.dgrave}` },
  { i: 'e#~-', o: `e${m.d.tilde}${m.d.ddot}${m.u.grave}` },
  { i: 'e#~', o: `e${m.d.tilde}${m.d.ddot}` },
  { i: '(e#~++)', o: `e${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(e#~+)', o: `e${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(e#~--)', o: `e${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(e#~-)', o: `e${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(e#~)', o: `e${m.d.tilde}${m.d.ddot}${m.u.dot}` },

  { i: 'e#++', o: `e${m.d.ddot}${m.u.dacute}` },
  { i: 'e#+', o: `e${m.d.ddot}${m.u.acute}` },
  { i: 'e#--', o: `e${m.d.ddot}${m.u.dgrave}` },
  { i: 'e#-', o: `e${m.d.ddot}${m.u.grave}` },
  { i: 'e#', o: `e${m.d.ddot}` },
  { i: '(e#++)', o: `e${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(e#+)', o: `e${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(e#--)', o: `e${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(e#-)', o: `e${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(e#)', o: `e${m.d.ddot}${m.u.dot}` },

  { i: 'e~++', o: `e${m.d.tilde}${m.u.dacute}` },
  { i: 'e~+', o: `e${m.d.tilde}${m.u.acute}` },
  { i: 'e~--', o: `e${m.d.tilde}${m.u.dgrave}` },
  { i: 'e~-', o: `e${m.d.tilde}${m.u.grave}` },
  { i: 'e~', o: `e${m.d.tilde}` },
  { i: '(e~++)', o: `e${m.d.tilde}${m.u.dot}${m.u.dacute}` },
  { i: '(e~+)', o: `e${m.d.tilde}${m.u.dot}${m.u.acute}` },
  { i: '(e~--)', o: `e${m.d.tilde}${m.u.dot}${m.u.dgrave}` },
  { i: '(e~-)', o: `e${m.d.tilde}${m.u.dot}${m.u.grave}` },
  { i: '(e~)', o: `e${m.d.tilde}${m.u.dot}` },

  { i: 'e++', o: `e${m.u.dacute}` },
  { i: 'e+', o: `e${m.u.acute}` },
  { i: 'e--', o: `e${m.u.dgrave}` },
  { i: 'e-', o: `e${m.u.grave}` },
  { i: 'e', o: `e` },
  { i: '(e++)', o: `e${m.u.dot}${m.u.dacute}` },
  { i: '(e+)', o: `e${m.u.dot}${m.u.acute}` },
  { i: '(e--)', o: `e${m.u.dot}${m.u.dgrave}` },
  { i: '(e-)', o: `e${m.u.dot}${m.u.grave}` },
  { i: '(e)', o: `e${m.u.dot}` },

  { i: 'A~++', o: `a${m.d.tilde}${m.d.dot}${m.u.dacute}` },
  { i: 'A~+', o: `a${m.d.tilde}${m.d.dot}${m.u.acute}` },
  { i: 'A~--', o: `a${m.d.tilde}${m.d.dot}${m.u.dgrave}` },
  { i: 'A~-', o: `a${m.d.tilde}${m.d.dot}${m.u.grave}` },
  { i: 'A~', o: `a${m.d.tilde}${m.d.dot}` },
  { i: '(A~++)', o: `a${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(A~+)', o: `a${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(A~--)', o: `a${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(A~-)', o: `a${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(A~)', o: `a${m.d.tilde}${m.d.dot}${m.u.dot}` },

  { i: 'A++', o: `a${m.d.dot}${m.u.dacute}` },
  { i: 'A+', o: `a${m.d.dot}${m.u.acute}` },
  { i: 'A--', o: `a${m.d.dot}${m.u.dgrave}` },
  { i: 'A-', o: `a${m.d.dot}${m.u.grave}` },
  { i: 'A', o: `a${m.d.dot}` },
  { i: '(A++)', o: `a${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(A+)', o: `a${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(A--)', o: `a${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(A-)', o: `a${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(A)', o: `a${m.d.dot}${m.u.dot}` },

  { i: 'a#~++', o: `a${m.d.tilde}${m.d.ddot}${m.u.dacute}` },
  { i: 'a#~+', o: `a${m.d.tilde}${m.d.ddot}${m.u.acute}` },
  { i: 'a#~--', o: `a${m.d.tilde}${m.d.ddot}${m.u.dgrave}` },
  { i: 'a#~-', o: `a${m.d.tilde}${m.d.ddot}${m.u.grave}` },
  { i: 'a#~', o: `a${m.d.tilde}${m.d.ddot}` },
  { i: '(a#~++)', o: `a${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(a#~+)', o: `a${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(a#~--)', o: `a${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(a#~-)', o: `a${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(a#~)', o: `a${m.d.tilde}${m.d.ddot}${m.u.dot}` },

  { i: 'a#++', o: `a${m.d.ddot}${m.u.dacute}` },
  { i: 'a#+', o: `a${m.d.ddot}${m.u.acute}` },
  { i: 'a#--', o: `a${m.d.ddot}${m.u.dgrave}` },
  { i: 'a#-', o: `a${m.d.ddot}${m.u.grave}` },
  { i: 'a#', o: `a${m.d.ddot}` },
  { i: '(a#++)', o: `a${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(a#+)', o: `a${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(a#--)', o: `a${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(a#-)', o: `a${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(a#)', o: `a${m.d.ddot}${m.u.dot}` },

  { i: 'a~++', o: `a${m.d.tilde}${m.u.dacute}` },
  { i: 'a~+', o: `a${m.d.tilde}${m.u.acute}` },
  { i: 'a~--', o: `a${m.d.tilde}${m.u.dgrave}` },
  { i: 'a~-', o: `a${m.d.tilde}${m.u.grave}` },
  { i: 'a~', o: `a${m.d.tilde}` },
  { i: '(a~++)', o: `a${m.d.tilde}${m.u.dot}${m.u.dacute}` },
  { i: '(a~+)', o: `a${m.d.tilde}${m.u.dot}${m.u.acute}` },
  { i: '(a~--)', o: `a${m.d.tilde}${m.u.dot}${m.u.dgrave}` },
  { i: '(a~-)', o: `a${m.d.tilde}${m.u.dot}${m.u.grave}` },
  { i: '(a~)', o: `a${m.d.tilde}${m.u.dot}` },

  { i: 'a++', o: `a${m.u.dacute}` },
  { i: 'a+', o: `a${m.u.acute}` },
  { i: 'a--', o: `a${m.u.dgrave}` },
  { i: 'a-', o: `a${m.u.grave}` },
  { i: 'a', o: `a` },
  { i: '(a++)', o: `a${m.u.dot}${m.u.dacute}` },
  { i: '(a+)', o: `a${m.u.dot}${m.u.acute}` },
  { i: '(a--)', o: `a${m.u.dot}${m.u.dgrave}` },
  { i: '(a-)', o: `a${m.u.dot}${m.u.grave}` },
  { i: '(a)', o: `a${m.u.dot}` },

  { i: 'O~++', o: `o${m.d.tilde}${m.d.dot}${m.u.dacute}` },
  { i: 'O~+', o: `o${m.d.tilde}${m.d.dot}${m.u.acute}` },
  { i: 'O~--', o: `o${m.d.tilde}${m.d.dot}${m.u.dgrave}` },
  { i: 'O~-', o: `o${m.d.tilde}${m.d.dot}${m.u.grave}` },
  { i: 'O~', o: `o${m.d.tilde}${m.d.dot}` },
  { i: '(O~++)', o: `o${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(O~+)', o: `o${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(O~--)', o: `o${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(O~-)', o: `o${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(O~)', o: `o${m.d.tilde}${m.d.dot}${m.u.dot}` },

  { i: 'O++', o: `o${m.d.dot}${m.u.dacute}` },
  { i: 'O+', o: `o${m.d.dot}${m.u.acute}` },
  { i: 'O--', o: `o${m.d.dot}${m.u.dgrave}` },
  { i: 'O-', o: `o${m.d.dot}${m.u.grave}` },
  { i: 'O', o: `o${m.d.dot}` },
  { i: '(O++)', o: `o${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(O+)', o: `o${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(O--)', o: `o${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(O-)', o: `o${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(O)', o: `o${m.d.dot}${m.u.dot}` },

  { i: 'o#~++', o: `o${m.d.tilde}${m.d.ddot}${m.u.dacute}` },
  { i: 'o#~+', o: `o${m.d.tilde}${m.d.ddot}${m.u.acute}` },
  { i: 'o#~--', o: `o${m.d.tilde}${m.d.ddot}${m.u.dgrave}` },
  { i: 'o#~-', o: `o${m.d.tilde}${m.d.ddot}${m.u.grave}` },
  { i: 'o#~', o: `o${m.d.tilde}${m.d.ddot}` },
  { i: '(o#~++)', o: `o${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(o#~+)', o: `o${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(o#~--)', o: `o${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(o#~-)', o: `o${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(o#~)', o: `o${m.d.tilde}${m.d.ddot}${m.u.dot}` },

  { i: 'o#++', o: `o${m.d.ddot}${m.u.dacute}` },
  { i: 'o#+', o: `o${m.d.ddot}${m.u.acute}` },
  { i: 'o#--', o: `o${m.d.ddot}${m.u.dgrave}` },
  { i: 'o#-', o: `o${m.d.ddot}${m.u.grave}` },
  { i: 'o#', o: `o${m.d.ddot}` },
  { i: '(o#++)', o: `o${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(o#+)', o: `o${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(o#--)', o: `o${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(o#-)', o: `o${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(o#)', o: `o${m.d.ddot}${m.u.dot}` },

  { i: 'o~++', o: `o${m.d.tilde}${m.u.dacute}` },
  { i: 'o~+', o: `o${m.d.tilde}${m.u.acute}` },
  { i: 'o~--', o: `o${m.d.tilde}${m.u.dgrave}` },
  { i: 'o~-', o: `o${m.d.tilde}${m.u.grave}` },
  { i: 'o~', o: `o${m.d.tilde}` },
  { i: '(o~++)', o: `o${m.d.tilde}${m.u.dot}${m.u.dacute}` },
  { i: '(o~+)', o: `o${m.d.tilde}${m.u.dot}${m.u.acute}` },
  { i: '(o~--)', o: `o${m.d.tilde}${m.u.dot}${m.u.dgrave}` },
  { i: '(o~-)', o: `o${m.d.tilde}${m.u.dot}${m.u.grave}` },
  { i: '(o~)', o: `o${m.d.tilde}${m.u.dot}` },

  { i: 'o++', o: `o${m.u.dacute}` },
  { i: 'o+', o: `o${m.u.acute}` },
  { i: 'o--', o: `o${m.u.dgrave}` },
  { i: 'o-', o: `o${m.u.grave}` },
  { i: 'o', o: `o` },
  { i: '(o++)', o: `o${m.u.dot}${m.u.dacute}` },
  { i: '(o+)', o: `o${m.u.dot}${m.u.acute}` },
  { i: '(o--)', o: `o${m.u.dot}${m.u.dgrave}` },
  { i: '(o-)', o: `o${m.u.dot}${m.u.grave}` },
  { i: '(o)', o: `o${m.u.dot}` },

  { i: 'U~++', o: `u${m.d.tilde}${m.d.dot}${m.u.dacute}` },
  { i: 'U~+', o: `u${m.d.tilde}${m.d.dot}${m.u.acute}` },
  { i: 'U~--', o: `u${m.d.tilde}${m.d.dot}${m.u.dgrave}` },
  { i: 'U~-', o: `u${m.d.tilde}${m.d.dot}${m.u.grave}` },
  { i: 'U~', o: `u${m.d.tilde}${m.d.dot}` },
  { i: '(U~++)', o: `u${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(U~+)', o: `u${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(U~--)', o: `u${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(U~-)', o: `u${m.d.tilde}${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(U~)', o: `u${m.d.tilde}${m.d.dot}${m.u.dot}` },

  { i: 'U++', o: `u${m.d.dot}${m.u.dacute}` },
  { i: 'U+', o: `u${m.d.dot}${m.u.acute}` },
  { i: 'U--', o: `u${m.d.dot}${m.u.dgrave}` },
  { i: 'U-', o: `u${m.d.dot}${m.u.grave}` },
  { i: 'U', o: `u${m.d.dot}` },
  { i: '(U++)', o: `u${m.d.dot}${m.u.dot}${m.u.dacute}` },
  { i: '(U+)', o: `u${m.d.dot}${m.u.dot}${m.u.acute}` },
  { i: '(U--)', o: `u${m.d.dot}${m.u.dot}${m.u.dgrave}` },
  { i: '(U-)', o: `u${m.d.dot}${m.u.dot}${m.u.grave}` },
  { i: '(U)', o: `u${m.d.dot}${m.u.dot}` },

  { i: 'u#~++', o: `u${m.d.tilde}${m.d.ddot}${m.u.dacute}` },
  { i: 'u#~+', o: `u${m.d.tilde}${m.d.ddot}${m.u.acute}` },
  { i: 'u#~--', o: `u${m.d.tilde}${m.d.ddot}${m.u.dgrave}` },
  { i: 'u#~-', o: `u${m.d.tilde}${m.d.ddot}${m.u.grave}` },
  { i: 'u#~', o: `u${m.d.tilde}${m.d.ddot}` },
  { i: '(u#~++)', o: `u${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(u#~+)', o: `u${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(u#~--)', o: `u${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(u#~-)', o: `u${m.d.tilde}${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(u#~)', o: `u${m.d.tilde}${m.d.ddot}${m.u.dot}` },

  { i: 'u#++', o: `u${m.d.ddot}${m.u.dacute}` },
  { i: 'u#+', o: `u${m.d.ddot}${m.u.acute}` },
  { i: 'u#--', o: `u${m.d.ddot}${m.u.dgrave}` },
  { i: 'u#-', o: `u${m.d.ddot}${m.u.grave}` },
  { i: 'u#', o: `u${m.d.ddot}` },
  { i: '(u#++)', o: `u${m.d.ddot}${m.u.dot}${m.u.dacute}` },
  { i: '(u#+)', o: `u${m.d.ddot}${m.u.dot}${m.u.acute}` },
  { i: '(u#--)', o: `u${m.d.ddot}${m.u.dot}${m.u.dgrave}` },
  { i: '(u#-)', o: `u${m.d.ddot}${m.u.dot}${m.u.grave}` },
  { i: '(u#)', o: `u${m.d.ddot}${m.u.dot}` },

  { i: 'u~++', o: `u${m.d.tilde}${m.u.dacute}` },
  { i: 'u~+', o: `u${m.d.tilde}${m.u.acute}` },
  { i: 'u~--', o: `u${m.d.tilde}${m.u.dgrave}` },
  { i: 'u~-', o: `u${m.d.tilde}${m.u.grave}` },
  { i: 'u~', o: `u${m.d.tilde}` },
  { i: '(u~++)', o: `u${m.d.tilde}${m.u.dot}${m.u.dacute}` },
  { i: '(u~+)', o: `u${m.d.tilde}${m.u.dot}${m.u.acute}` },
  { i: '(u~--)', o: `u${m.d.tilde}${m.u.dot}${m.u.dgrave}` },
  { i: '(u~-)', o: `u${m.d.tilde}${m.u.dot}${m.u.grave}` },
  { i: '(u~)', o: `u${m.d.tilde}${m.u.dot}` },

  { i: 'u++', o: `u${m.u.dacute}` },
  { i: 'u+', o: `u${m.u.acute}` },
  { i: 'u--', o: `u${m.u.dgrave}` },
  { i: 'u-', o: `u${m.u.grave}` },
  { i: 'u', o: `u` },
  { i: '(u++)', o: `u${m.u.dot}${m.u.dacute}` },
  { i: '(u+)', o: `u${m.u.dot}${m.u.acute}` },
  { i: '(u--)', o: `u${m.u.dot}${m.u.dgrave}` },
  { i: '(u-)', o: `u${m.u.dot}${m.u.grave}` },
  { i: '(u)', o: `u${m.u.dot}` },

  { i: 'M', o: `m${m.u.dot}` },
  { i: 'm', o: `m` },
  { i: 'N', o: `n${m.d.dot}` },
  { i: 'n', o: `n` },
  { i: 'q', o: `q` },
  { i: 'Q', o: `q${m.u.dot}` },
  { i: 'g?', o: `g${m.u.grave}` },
  { i: 'g.', o: `g${m.u.tilde}` },
  { i: 'g@', o: `g${m.u.up}` },
  { i: 'g', o: `g` },
  { i: '\'', o: `'` },
  { i: '"', o: `"` },
  { i: 'd!', o: `d${m.d.grave}` },
  { i: 'd*', o: `d${m.d.tilde}` },
  { i: 'd+', o: `d${m.d.dot}` },
  { i: 'd.', o: `d${m.d.ddot}` },
  { i: 'd@', o: `d${m.d.down}` },
  { i: 'd', o: `d` },
  { i: 'b?', o: `b${m.d.acute}` },
  { i: 'b!', o: `b${m.d.grave}` },
  { i: 'b.', o: `b${m.d.ddot}` },
  { i: 'b@', o: `b${m.d.down}` },
  { i: 'b', o: `b` },
  { i: 'p!', o: `p${m.u.acute}` },
  { i: 'p*', o: `p${m.u.tilde}` },
  { i: 'p.', o: `p${m.u.ddot}` },
  { i: 'p@', o: `p${m.u.up}` },
  { i: 'p', o: `p` },
  { i: 'T', o: `t${m.d.dot}` },
  { i: 't!', o: `t${m.d.grave}` },
  { i: 't*', o: `t${m.d.tilde}` },
  { i: 't.', o: `t${m.d.ddot}` },
  { i: 't@', o: `t${m.d.down}` },
  { i: 't', o: `t` },
  { i: 'k!', o: `k${m.d.grave}` },
  { i: 'k*', o: `k${m.d.tilde}` },
  { i: 'K!', o: `k${m.d.dot}${m.d.grave}` },
  { i: 'K', o: `k${m.d.dot}` },
  { i: 'k.', o: `k${m.d.tilde}` },
  { i: 'k@', o: `k${m.d.down}` },
  { i: 'k', o: `k` },
  { i: 'H', o: `h${m.d.dot}` },
  { i: 'h', o: `h` },
  { i: 'J', o: `ȷ̈` },
  { i: 'j', o: `j` },
  { i: 'S!', o: `s${m.d.dot}${m.u.acute}` },
  { i: 's!', o: `s${m.u.acute}` },
  { i: 'S', o: `s${m.d.dot}` },
  { i: 's@', o: `s${m.d.down}` },
  { i: 's', o: `s` },
  { i: 'F', o: `f${m.d.dot}` },
  { i: 'f', o: `f` },
  { i: 'V', o: `v${m.d.dot}` },
  { i: 'v', o: `v` },
  { i: 'z', o: `z` },
  { i: 'Z', o: `z${m.d.dot}` },
  { i: 'C', o: `c${m.d.dot}` },
  { i: 'c', o: `c` },
  { i: 'L', o: `l${m.d.dot}` },
  { i: 'l*', o: `l${m.d.tilde}` },
  { i: 'l', o: `l` },
  { i: 'R', o: `r${m.d.dot}` },
  { i: 'r', o: `r` },
  { i: 'x!', o: `x${m.d.acute}` },
  { i: 'X', o: `x${m.d.dot}` },
  { i: 'x@', o: `x${m.d.down}` },
  { i: 'x', o: `x` },
  { i: 'w', o: `w` },
  { i: 'W', o: `w${m.d.dot}` },
  { i: 'y', o: `y` },
  { i: 'Y', o: `y${m.u.dot}` },
  { i: '~', o: `ɔ` },
  { i: "'", o: '\'' },
  { i: '=', o: 'ƨ' }
]

let VOWELS = [
  { i: `i${m.u.tilde}`, o: 'i~' },
  { i: `ɪ${m.u.tilde}`, o: 'I~' },
  { i: `ʏ${m.u.tilde}`, o: 'i#~' },
  { i: `ɨ${m.u.tilde}`, o: 'i#~' },
  { i: `y${m.u.tilde}`, o: 'i#~' },

  { i: `e${m.u.tilde}`, o: 'e~' },
  { i: `ɛ${m.u.tilde}`, o: 'E~' },
  { i: `ε${m.u.tilde}`, o: 'E~' },
  { i: `œ${m.u.tilde}`, o: 'e#~' },
  { i: `ɶ${m.u.tilde}`, o: 'e#~' },

  { i: `a${m.u.tilde}`, o: 'a~' },
  { i: `ɐ${m.u.tilde}`, o: 'a~' },
  { i: `ɑ${m.u.tilde}`, o: 'a~' },
  { i: `ɒ${m.u.tilde}`, o: 'a~' },
  { i: `ä${m.u.tilde}`, o: 'a~' },
  { i: `æ${m.u.tilde}`, o: 'A~' },
  { i: `æ${m.u.tilde}`, o: 'A~' },
  { i: `ø${m.u.tilde}`, o: 'a#~' },

  { i: `o${m.u.tilde}`, o: 'o~' },
  { i: `ɜ${m.u.tilde}`, o: 'O~' },
  { i: `ɵ${m.u.tilde}`, o: 'O~' },
  { i: `ʊ${m.u.tilde}`, o: 'O~' },
  { i: `ɤ${m.u.tilde}`, o: 'O~' },
  { i: `ɯ${m.u.tilde}`, o: 'O~' },
  { i: `ɔ${m.u.tilde}`, o: 'o#~' },

  { i: `u${m.u.tilde}`, o: 'u~' },
  { i: `ʉ${m.u.tilde}`, o: 'u~' },
  { i: `ʌ${m.u.tilde}`, o: 'U~' },
  { i: `ə${m.u.tilde}`, o: 'U~' },
  { i: `ɞ${m.u.tilde}`, o: 'U~' },
  { i: `ɹ${m.u.tilde}`, o: 'u#~' },

  { i: 'ũ', o: 'u~' },
  { i: 'ĩ', o: 'i~' },
  { i: 'ẽ', o: 'e~' },

  { i: 'i', o: 'i' },
  { i: 'ɪ', o: 'I' },
  { i: 'ɘ', o: 'I' },
  { i: 'ʏ', o: 'i#' },
  { i: 'ɨ', o: 'i#' },
  { i: 'y', o: 'i#' },

  { i: 'e', o: 'e' },
  { i: 'ɛ', o: 'E' },
  { i: 'ε', o: 'E' },
  { i: 'œ', o: 'e#' },
  { i: 'ɶ', o: 'e#' },

  { i: 'a', o: 'a' },
  { i: `ɐ`, o: 'a' },
  { i: 'ɑ', o: 'a' },
  { i: 'ɒ', o: 'a' },
  { i: 'ä', o: 'a' },
  { i: 'æ', o: 'A' },
  { i: 'æ', o: 'A' },
  { i: 'ø', o: 'a#' },

  { i: 'o', o: 'o' },
  { i: 'ɜ', o: 'O' },
  { i: 'ɵ', o: 'O' },
  { i: 'ʊ', o: 'O' },
  { i: 'ɤ', o: 'O' },
  { i: 'ɯ', o: 'O' },
  { i: 'ɔ', o: 'o#' },

  { i: 'u', o: 'u' },
  { i: 'ʉ', o: 'u' },
  { i: 'ʌ', o: 'U' },
  { i: 'ə', o: 'U' },
  { i: 'ǝ', o: 'U' },
  { i: 'ɞ', o: 'U' },
  { i: 'ɹ', o: 'u#' },
]

const TONES = [[m.u.dgrave, '__'], [m.u.grave, '_'], [m.u.acute, '^'], [m.u.dacute, '^^'], [m.u.down, '_^'], [m.u.up, '^_']]
const NEWVOWELS = []

TONES.forEach(tone => {
  VOWELS.forEach(({ i, o }) => {
    let out = tone[1].split('').map(t => `${o}${t}`).join('')
    NEWVOWELS.push({ i: `${i}${tone[0]}`, o: out })
  })
})

VOWELS.forEach(vowel => NEWVOWELS.push(vowel))

const IPA_TO_ASCII = [
  ...NEWVOWELS,
  { i: 'b', o: 'b' },
  { i: 'ɓ', o: 'b?' },
  { i: 'ʙ', o: 'b!' },
  { i: 'd', o: 'd' },
  { i: 'ɖ', o: 'd+' },
  { i: 'ǂ', o: 'd*' },
  { i: 'θ', o: 'c' },
  { i: 'ð', o: 'C' },
  { i: 'f', o: 'f' },
  { i: 'ɸ', o: 'F' },
  { i: 'g', o: 'g' },
  { i: 'ɡ', o: 'g' },
  { i: 'ɢ', o: 'g' },
  { i: 'ɠ', o: 'g?' },
  { i: 'ʛ', o: 'g?' },
  { i: 'ɟ', o: 'gy' },
  { i: 'ʄ', o: 'g?y' },
  { i: 'h', o: 'h' },
  { i: 'ħ', o: 'H' },
  { i: 'ɦ', o: 'hh' },
  { i: 'x', o: 'H' },
  { i: 'χ', o: 'H' },
  { i: 'ç', o: 'hy' },
  { i: 'c', o: 'ky' },
  { i: 'ʐ', o: 'J' },
  { i: 'ʒ', o: 'j' },
  { i: 'ɮ', o: 'Z' },
  { i: 'ʑ', o: 'jy' },
  { i: 'k\'', o: 'k!' },
  { i: 'k͈', o: 'k@' },
  { i: 'k̚', o: 'k.' },
  { i: 'k', o: 'k' },
  { i: 'ǃ', o: 'k*' },
  { i: 'q\'', o: 'K!' },
  { i: 'q', o: 'K' },
  { i: 'm', o: 'm' },
  { i: 'n', o: 'n' },
  { i: 'ɳ', o: 'N' },
  { i: 'ŋ', o: 'q' },
  { i: 'ɴ', o: 'q' },
  { i: 'ɲ', o: 'ny' },
  { i: 'l', o: 'l' },
  { i: 'ɭ', o: 'L' },
  { i: 'ʎ', o: 'ly' },
  { i: 'ǁ', o: 'l*' },
  { i: 'p͈', o: 'p@' },
  { i: 'p̚', o: 'p.' },
  { i: 'p', o: 'p' },
  { i: 'p\'', o: 'p!' },
  { i: 'ʘ', o: 'p*' },
  { i: 'r', o: 'r' },
  { i: 'ɾ', o: 'r' },
  { i: 'ɽ', o: 'R' },
  { i: 'ɣ', o: 'Q' },
  { i: 'ʁ', o: 'Q' },
  { i: 'ʀ', o: 'QQ' },
  { i: 's͈', o: 's@' },
  { i: 'ɬ', o: 'S' },
  { i: 's', o: 's' },
  { i: 't̚', o: 't.' },
  { i: 't͈', o: 't@' },
  { i: 't\'', o: 't!' },
  { i: 't', o: 't' },
  { i: 'ʈ', o: 'T' },
  { i: 'ǀ', o: 't*' },
  { i: 'v', o: 'v' },
  { i: 'ʋ', o: 'V' },
  { i: 'ⱱ', o: 'V' },
  { i: 'β', o: 'V' },
  { i: 'w', o: 'w' },
  { i: 'ʍ', o: 'wh' },
  { i: 'ɰ', o: 'W' },
  { i: 'ʃ', o: 'x' },
  { i: 'ʂ', o: 'X' },
  { i: 'ɕ', o: 'xy' },
  { i: 'j', o: 'y' },
  { i: 'ʝ', o: 'y' },
  { i: 'ɥ', o: 'yw' },
  { i: 'z', o: 'z' },
  { i: 'ʔ', o: '\'' },
  { i: 'ʼ', o: '\'' },
  { i: 'ʕ', o: 'Q~' },
  { i: 'ʰ', o: 'h' },
  { i: 'ʱ', o: 'hh' },
  { i: 'ˀ', o: '\'' },
  { i: 'ˤ', o: '~' },
  { i: 'ʷ', o: 'W' },
  { i: 'ɫ', o: 'l=' },
  { i: 'ɝ', o: 'u#' },
  { i: '\u031a', o: '.' },
  { i: '\u031d', o: '' },
  { i: '\u031e', o: '' },
  { i: '\u0320', o: '' },
  { i: '\u0326', o: '' },
  { i: '\u032a', o: '' },
  { i: '\u0339', o: '' },
  { i: '\u0348', o: '' },
  { i: '\u0348', o: '' },
  { i: '\u035c', o: '' },
  { i: '\u0361', o: '' },
  { i: '-', o: '' },
  { i: '˨', o: '_' },
  { i: '˦', o: '^' },
  { i: '˥', o: '^' },
  { i: '˧', o: '' },
  { i: '\u0306', o: '' }
]

const IPA_DIPHTHONGS = [
  { o: 'xʲ' },
  { o: 'xʷ' },
  { o: 'kʲʰ' },
  { o: 'kʼʲ' },
  { o: 'kʷʰ' },
  { o: 'kʼʷ' },
  { o: 'pʰ' },
  { o: 'qʰ' },
  { o: 'qʷʰ' },
  { o: 'qʼʷ' },
  { o: 'tʰ' },
  { o: 't͡ɬʰ' },
  { o: 't͡ɬʼ' },
  { o: 't͡sʰ' },
  { o: 't͡sʼ' },
  { o: 'χʷ' },
  { o: 'dz' },
  { o: 'ts' },
  { o: 'dʑ' },
  { o: 'dz' },
  { o: 'bʲ' },
  { o: 'dʲ' },
  { o: 'fʲ' },
  { o: 'ɡʲ' },
  { o: 'ɣʲ' },
  { o: 'kʲ' },
  { o: 'lʲ' },
  { o: 'mʲ' },
  { o: 'nʲ' },
  { o: 'pʲ' },
  { o: 'rʲ' },
  { o: 'sʲ' },
  { o: 'tʲ' },
  { o: 'tsʲ' },
  { o: 'tɕ' },
  { o: 'xʲ' },
  { o: 'vʲ' },
  { o: 'zʲ' },
]

const tree = st.fork(ASCII_TO_UNICODE)
const form = text => st.form(text, tree)

form.ASCII_TO_UNICODE = ASCII_TO_UNICODE
form.IPA_TO_ASCII = IPA_TO_ASCII
form.map = m

if (typeof module != 'undefined') {
  module.exports = form
}
