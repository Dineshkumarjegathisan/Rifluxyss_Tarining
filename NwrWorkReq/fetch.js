async function fetchText ()
{
    let res = await fetch('/demo.txt')
    console.log(res);
}
fetchText();