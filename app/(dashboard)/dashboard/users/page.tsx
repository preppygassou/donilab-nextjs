import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/user-tables/client';
import { getUsers } from '@/data/users';

const breadcrumbItems = [{ title: 'Utilisateurs', link: '/dashboard/users' }];
export default async function page() {
  const users = await getUsers();
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </>
  );
}
