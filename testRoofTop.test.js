const { getArray, check, finalCheck, testRoofTop } = require('./src/testRoofTop');

stringArray = [
    "OATXJCW0ewb0IhR0xLyv0caQnoIwB7aZqSZfOgAuJBMieacyU8TvbudsKtufyN6ztjAEkDO6PtULR2EFTwhi2s1PmpdlSUmVPoxS",
    "7Qe8us4UMmyHE55j9y765gxUSPPazMUwORhaTp9oeufgskJQf7EWnHaMwlE06wXbHBjCmGmdihmlxwmngIu56th9zXgyY9DogY0a",
    "bacZwCvgFQk6peA2kjCJXniuKrII8OhBfNkAXBsA02mHXTnX5nCjLK7dZewPtPH4RUjtDROW3lx2oix6jTFzps9itNA0Bw7aFF8g",
    "4hTJHC4Afrk1CAZ5cd2GzvFvbvWYw0TDboPG2tb1UFtltbdV4h1FRnzn7XoyuNiTlYVzqeCgY0RnMREpRJQ02fAN9MU8gJR3tzTd",
    "6ttmUG0zNYj5OKic0XJGr6l6ppyn5PNxpnj78jWpTFDMJSmPFAY757l7IcsIfoAZLfiWLzlnmEBMoLZMxnys2uZ3drvoBPVWLG3i",
    "RHgLjtu4GesfQhCkR7dXpesJN5HU3kVJpz8FsgS52nycnSkNX0ypLruntnN3X0IRxvDDlvBrPERVJqXA7yX7kHIKBML8H66UBo7X",
    "mECHlgWPmCIgDOQ1He64oNLt3wDTc9Vk1VpLH3rRTUFduZGwt2wcWW1HT0smtu6xOAEbH89TBCZeoyBtQ1K1bYXuop5G0oLeuItN",
    "7CgPbxyyqK52bYbE8SsW7oyDWpTTWXrXovAaYUYkJrjwS95K8UXhsibZZeSy92RHoWCyxNyt4aeMfNqGdE8S4dDaPFezV4HleBV3",
    "7QYn5Zg6oDwL36eieg5gik9Mbf9FvwHfCRK137MuiVYFcM9xPmLecsbg6nlJZzIWG9IQUxlp8tJZEgAPpM5UyZYBF2si55Z78Z00"
];

arrayOrdenado = "OATXJCW0ewb0IhR0xLyv0caQnoIwB7aZqSZfOgAuJBMieacyU8TvbudsKtufyN6ztjAEkDO6PtULR2EFTwhi2s1PmpdlSUmVPoxSmECHlgWPmCIgDOQ1He64oNLt3wDTc9Vk1VpLH3rRTUFduZGwt2wcWW1HT0smtu6xOAEbH89TBCZeoyBtQ1K1bYXuop5G0oLeuItN7CgPbxyyqK52bYbE8SsW7oyDWpTTWXrXovAaYUYkJrjwS95K8UXhsibZZeSy92RHoWCyxNyt4aeMfNqGdE8S4dDaPFezV4HleBV34hTJHC4Afrk1CAZ5cd2GzvFvbvWYw0TDboPG2tb1UFtltbdV4h1FRnzn7XoyuNiTlYVzqeCgY0RnMREpRJQ02fAN9MU8gJR3tzTd7QYn5Zg6oDwL36eieg5gik9Mbf9FvwHfCRK137MuiVYFcM9xPmLecsbg6nlJZzIWG9IQUxlp8tJZEgAPpM5UyZYBF2si55Z78Z007Qe8us4UMmyHE55j9y765gxUSPPazMUwORhaTp9oeufgskJQf7EWnHaMwlE06wXbHBjCmGmdihmlxwmngIu56th9zXgyY9DogY0abacZwCvgFQk6peA2kjCJXniuKrII8OhBfNkAXBsA02mHXTnX5nCjLK7dZewPtPH4RUjtDROW3lx2oix6jTFzps9itNA0Bw7aFF8gRHgLjtu4GesfQhCkR7dXpesJN5HU3kVJpz8FsgS52nycnSkNX0ypLruntnN3X0IRxvDDlvBrPERVJqXA7yX7kHIKBML8H66UBo7X6ttmUG0zNYj5OKic0XJGr6l6ppyn5PNxpnj78jWpTFDMJSmPFAY757l7IcsIfoAZLfiWLzlnmEBMoLZMxnys2uZ3drvoBPVWLG3i"
jest.setTimeout(5000000)

test('getsArray', async () => {
    const data = await getArray("8c63c051-c5ac-4e2d-ab00-4a32f7b25ccb");
    expect(await data).toEqual(stringArray)
});
test('ordena el Array', async () => {
    const data = await check(stringArray, "8c63c051-c5ac-4e2d-ab00-4a32f7b25ccb");
    expect(await data).toEqual(arrayOrdenado)
});
test('checkea el array', async () => {
    const data = await finalCheck(arrayOrdenado, "8c63c051-c5ac-4e2d-ab00-4a32f7b25ccb");
    expect(await data).toBe(true)
});

test('returns true', async () => {
    const data = await testRoofTop("8c63c051-c5ac-4e2d-ab00-4a32f7b25ccb");
    expect(await data).toBe(true)
});

