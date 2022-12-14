import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
							<InertiaLink
								className="px-6 py-2 mr-2 text-white bg-green-500 rounded-md focus:outline-none"
								href={route("entries.index")}>
								Entries
							</InertiaLink>
							<InertiaLink
								className="px-6 py-2 mr-2 text-white bg-blue-500 rounded-md focus:outline-none"
								href={route("entries.index")}>
								Example
							</InertiaLink>
						</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
