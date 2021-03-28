import * as wordcut from 'wordcut';
wordcut.init();

const myword = `ราชสีห์เจ้าป่าตัวหนึ่งกำลังนอนหลับพักผ่อนอย่างสบายใจ หนูตัวหนึ่งวิ่งเล่นซุกซน จนเผลอไต่ขึ้นไปบนร่างของราชสีห์ ทำให้ ราชสีห์ตกใจตื่น คำรามด้วยความโกรธและตะปบจับหนูไว้ เจ้าหนูกลัวจนตัวสั่น`;
const mywords = (wordcut.cut(myword) as string).split('|') as string[];
mywords.forEach((word) => {
	if (word.match('.(ร|ล|ว)')) {
		console.log(word);
	}
});
