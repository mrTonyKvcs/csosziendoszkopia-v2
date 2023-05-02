<?php

namespace App\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ConsultationExport implements FromCollection, WithMapping, WithHeadings, WithColumnWidths, WithStyles
{
    protected $data;

    public function __construct($appointments)
    {
        $this->data = $appointments;
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
            'Telefonszám',
            'Taj-száma',
        ];
    }

    /**
     * @return array
     */
    public function columnWidths(): array
    {
        return [
            'A' => 15.0,
            'B' => 15.0,
            'C' => 15.0,
            'D' => 15.0,
            'E' => 15.0,
        ];
    }

    /**
     * @return array
     */
    public function styles($row): array
    {
        return [
            'A' => [
                'alignment' => [
                    'horizontal' => Alignment::HORIZONTAL_CENTER,
                ],
            ],
            'B' => [
                'alignment' => [
                    'horizontal' => Alignment::HORIZONTAL_CENTER,
                ],
            ],
            'C' => [
                'alignment' => [
                    'horizontal' => Alignment::HORIZONTAL_CENTER,
                ],
            ],
            'D' => [
                'alignment' => [
                    'horizontal' => Alignment::HORIZONTAL_CENTER,
                ],
            ],
            'E' => [
                'alignment' => [
                    'horizontal' => Alignment::HORIZONTAL_CENTER,
                ],
            ],
        ];
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return collect($this->data);
    }

    /**
    * @var Invoice $invoice
    */
    public function map($item): array
    {
        return [
            Carbon::parse($item['start_at'])->format('H:i'),
            $item['medical_examination']['name'] ?? null,
            $item['applicant']['name'] ?? null,
            $item['applicant']['phone'] ?? null,
            $item['applicant']['social_security_number'] ?? null,
        ];
    }
}
