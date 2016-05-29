'use strict'

import test from 'ava'
import bString from '..'

test(`Basic digits 123... → ¹²³⋅⋅⋅/₁₂₃...`, t => {
	t.plan(2)
	t.is(bString.toSubscript('1234567890'), '₁₂₃₄₅₆₇₈₉₀')
	t.is(bString.toSuperscript('1234567890'), '¹²³⁴⁵⁶⁷⁸⁹⁰')
})

test(`Pangram → ᵀʰᵉ/ᴛₕₑ`, t => {
	const pangram = 'The quick brown fox jumps over the lazy dog.'
	t.plan(2)
	t.is(bString.toSubscript(pangram), 'ᴛₕₑ ₓᵤᵢₓₖ ₓᵣₒₓₙ ₓₒₓ ⱼᵤₘₚₛ ₒᵥₑᵣ ₜₕₑ ₗₐₓₓ ₓₒₓ.')
	t.is(bString.toSuperscript(pangram), 'ᵀʰᵉ ᵍᵘⁱᶜᵏ ᵇʳᵒʷⁿ ᶠᵒˣ ʲᵘᵐᵖˢ ᵒᵛᵉʳ ᵗʰᵉ ˡᵃᶻʸ ᵈᵒᵍ⋅')
})

