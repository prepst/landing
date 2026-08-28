import assert from 'node:assert/strict'
import fs from 'node:fs'

const definition = JSON.parse(fs.readFileSync('public/strobi.avatar.json', 'utf8'))
const homepage = fs.readFileSync('components/homepage-client.tsx', 'utf8')
const styles = fs.readFileSync('app/globals.css', 'utf8')
const animation = definition.animations['landing-showcase']

assert.ok(animation, 'landing-showcase animation must exist')
assert.equal(animation.playbackMode, 'loop')
assert.ok(animation.steps.length >= 7, 'landing showcase should include many expressions')
assert.ok(
  animation.steps.every((step) => step.holdMs <= 1400 && step.transitionMs <= 600),
  'landing showcase poses should turn over quickly with smooth transitions',
)
assert.ok(
  animation.steps.reduce((total, step) => total + step.holdMs + step.transitionMs, 0) <= 14000,
  'landing showcase should complete a cycle in under 14 seconds',
)
assert.match(homepage, /<Peppa animation="landing-showcase"/)
assert.match(homepage, /function ScrollCompanion/)
assert.match(homepage, /className="scroll-companion"/)
assert.doesNotMatch(homepage, /Peppa is with you/)
assert.match(styles, /\.scroll-companion\s*\{[^}]*position:\s*fixed/)
assert.match(styles, /\.scroll-companion\s*\{[^}]*top:\s*50%/)
assert.doesNotMatch(styles, /\.scroll-companion\s*\{[^}]*border:/)
assert.doesNotMatch(styles, /\.scroll-companion\s*\{[^}]*background:/)
assert.doesNotMatch(styles, /\.scroll-companion\s*\{[^}]*box-shadow:/)

console.log('Peppa landing animation regression check passed')
