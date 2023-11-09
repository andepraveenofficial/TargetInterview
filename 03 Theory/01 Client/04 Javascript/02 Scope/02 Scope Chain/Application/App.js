// Lexical Scope

// Each Block has it's own Lexical scope

const a = 10;
const b = 50;

{
    const a = 20;
	const b = 60;
    {
        const a = 30;
		const b = 70;
        {
            const a = 40;
			const b = 80;
            console.log(a);
        }
    }
}
