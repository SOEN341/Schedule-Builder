<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrerequisitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prerequisites', function(Blueprint $table){

            $table->increments('prerequisiteId');
            $table->integer('priority');
            $table->integer('courseId')->unsigned();
            $table->foreign('courseId')->references('courseId')->on('courses');
            $table->string('prerequisiteCourseName');
            $table->string('typeOfPrerequisite');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('prerequisites');
    }
}
