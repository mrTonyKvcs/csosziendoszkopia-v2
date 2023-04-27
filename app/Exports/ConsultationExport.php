<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;

class ConsultationExport implements FromCollection, WithMapping, WithHeadings
{
    protected $data;

    public function __construct(object $data)
    {
        $this->data = $data;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function headings(): array
    {
        return[
            'Vizsgálat kezdete',
            'Vizsgálat típusa',
            'Páciens neve',
            'Taj-száma',
            'Telefonszám',
            // 'Kontroll vizsgálat'
        ];
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return $this->data;
    }

    /**
    * @var Invoice $invoice
    */
    public function map($item): array
    {
        return [
            $item->start_at,
            $item->medicalExamination->name ?? null,
            $item->applicant->name ?? null,
            $item->applicant->social_security_number ?? null,
            $item->applicant->phone ?? null,
            // $this->checkControlExamination($item->id ?? null, $item->applicant->id ?? null)
        ];
    }
}
