<script>
    let name = 'Nicolò Riglietti';
    function reverse_string(str){
        return str.split('').reverse().join('').toUpperCase()
    }
</script>

<h1>My name is {reverse_string(name)}!</h1>

<style>
    h1{
        width: 30%;
        border: 20px solid green;
        border-radius: 20px;
        color: red;
        text-align: center;
        margin: 30px auto;
        padding: 20px;
    }
</style>