export default interface UserModel {
    id: string | null;
    name: string;
    type: 'customer' | 'employee';
}
