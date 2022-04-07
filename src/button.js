import Button from '@mui/material/Button';

export default function CounterButton({ increment, count }) {
    return (
        <Button variant="text" onClick={() => {
            alert('clicked');
            count = count + 1;
            increment(count);
            console.log(count);

        }}>Increment</Button>);

}

