import { decoder, encoder, sha256 } from '@/uses/encoder/encoder'

const TEST_DATA = {
  key: '1234',
  data: 'hola mundo',
}

describe('Encoder', () => {
  let data

  test('Encoder function', () => {
    const { key, data: dataTest } = TEST_DATA
    data = encoder(key, dataTest)

    expect(data).not.toEqual('')
    expect(data).not.toEqual(dataTest)
  })

  test('Decoder function', () => {
    const { key, data: dataTest } = TEST_DATA
    data = decoder(key, data)

    expect(data).not.toEqual('')
    expect(data).toEqual(dataTest)
  })

  test('sha256', () => {
    const hash = sha256(data)

    expect(hash).toBeTypeOf('string')
    expect(hash).not.toEqual(data)
  })
})
