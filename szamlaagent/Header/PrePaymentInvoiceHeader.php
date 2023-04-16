<?php

namespace SzamlaAgent\Header;

use SzamlaAgent\Document\Invoice\Invoice;

/**
 * Előlegszámla fejléc
 *
 * @package SzamlaAgent\Header
 */
class PrePaymentInvoiceHeader extends InvoiceHeader {

    /**
     * @param int $type
     *
     * @throws \SzamlaAgent\SzamlaAgentException
     */
    function __construct($type = Invoice::INVOICE_TYPE_P_INVOICE) {
	parent::__construct($type);
        $this->setPrefix('END');
        $this->setPrePayment(true);
        $this->setPaymentMethod('bankkártya');
        $this->setPaymentDue(now()->format('Y-m-d'));
        $this->setPaid(true);
    }
}
