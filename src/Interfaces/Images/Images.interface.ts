export interface IImage
{
    id: any;
    uid: `IMG_${string}`;
    data: Buffer;
    type: string;
    size: number;
    name: string;
}