<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('parent')->unsigned()->nullable()->default(null);
            $table->foreign('parent')->references('id')->on('categories')->onUpdate('cascade')->onDelete('set null');
            $table->integer('order')->nullable();
            $table->string('name');
            $table->string('slug');
            $table->text('description')->nullable();
            $table->integer('active');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
